// Safely returns limited public fields and widget settings. SECURITY DEFINER bypasses RLS for this read.
create or replace function public.get_public_store(p_store text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_result jsonb;
  v_input text := lower(coalesce(p_store, ''));
  v_no_proto text := regexp_replace(v_input, '^https?://', '');
  v_no_www text := regexp_replace(v_no_proto, '^www\.', '');
  v_domain text := split_part(v_no_www, '/', 1);
  v_slug text := replace(v_domain, '.', '-');
  alt_slug text := v_slug;
begin
  -- 1) Try slug exact
  select jsonb_build_object(
    'id', s.id,
    'name', s.name,
    'domain', s.domain,
    'plan', coalesce(s.plan, 'Free'),
    'remaining_leads', coalesce(s.remaining_leads, 0),
    'max_leads', coalesce(s.max_leads, 100),
    'widget_settings',
      coalesce(
        jsonb_build_object(
          'heading', ws.heading,
          'description', ws.description,
          'button_text', ws.button_text,
          'background_color', ws.background_color,
          'text_color', ws.text_color,
          'button_color', ws.button_color,
          'overlay_opacity', ws.overlay_opacity,
          'is_active', ws.is_active,
          'show_email', ws.show_email,
          'show_phone', ws.show_phone,
          'discount_code', ws.discount_code,
          'redirect_url', ws.redirect_url,
          'show_coupon_page', ws.show_coupon_page
        ),
        '{}'::jsonb
      )
  )
  into v_result
  from stores s
  left join widget_settings ws on ws.store_id = s.id
  where s.store_slug = v_slug
  limit 1;

  if v_result is not null then
    return v_result;
  end if;

  -- 2) Try normalized domain exact
  select jsonb_build_object(
    'id', s.id, 'name', s.name, 'domain', s.domain, 'plan', coalesce(s.plan, 'Free'),
    'remaining_leads', coalesce(s.remaining_leads, 0), 'max_leads', coalesce(s.max_leads, 100),
    'widget_settings',
      coalesce(
        jsonb_build_object(
          'heading', ws.heading, 'description', ws.description, 'button_text', ws.button_text,
          'background_color', ws.background_color, 'text_color', ws.text_color,
          'button_color', ws.button_color, 'overlay_opacity', ws.overlay_opacity,
          'is_active', ws.is_active, 'show_email', ws.show_email, 'show_phone', ws.show_phone,
          'discount_code', ws.discount_code, 'redirect_url', ws.redirect_url, 'show_coupon_page', ws.show_coupon_page
        ),
        '{}'::jsonb
      )
  )
  into v_result
  from stores s
  left join widget_settings ws on ws.store_id = s.id
  where s.domain = v_domain
  limit 1;

  if v_result is not null then
    return v_result;
  end if;

  -- 3) Try alternative slug (dots -> hyphens)
  select jsonb_build_object(
    'id', s.id, 'name', s.name, 'domain', s.domain, 'plan', coalesce(s.plan, 'Free'),
    'remaining_leads', coalesce(s.remaining_leads, 0), 'max_leads', coalesce(s.max_leads, 100),
    'widget_settings',
      coalesce(
        jsonb_build_object(
          'heading', ws.heading, 'description', ws.description, 'button_text', ws.button_text,
          'background_color', ws.background_color, 'text_color', ws.text_color,
          'button_color', ws.button_color, 'overlay_opacity', ws.overlay_opacity,
          'is_active', ws.is_active, 'show_email', ws.show_email, 'show_phone', ws.show_phone,
          'discount_code', ws.discount_code, 'redirect_url', ws.redirect_url, 'show_coupon_page', ws.show_coupon_page
        ),
        '{}'::jsonb
      )
  )
  into v_result
  from stores s
  left join widget_settings ws on ws.store_id = s.id
  where s.store_slug = alt_slug
  limit 1;

  if v_result is not null then
    return v_result;
  end if;

  -- 4) Try original domain text (lowercased)
  select jsonb_build_object(
    'id', s.id, 'name', s.name, 'domain', s.domain, 'plan', coalesce(s.plan, 'Free'),
    'remaining_leads', coalesce(s.remaining_leads, 0), 'max_leads', coalesce(s.max_leads, 100),
    'widget_settings',
      coalesce(
        jsonb_build_object(
          'heading', ws.heading, 'description', ws.description, 'button_text', ws.button_text,
          'background_color', ws.background_color, 'text_color', ws.text_color,
          'button_color', ws.button_color, 'overlay_opacity', ws.overlay_opacity,
          'is_active', ws.is_active, 'show_email', ws.show_email, 'show_phone', ws.show_phone,
          'discount_code', ws.discount_code, 'redirect_url', ws.redirect_url, 'show_coupon_page', ws.show_coupon_page
        ),
        '{}'::jsonb
      )
  )
  into v_result
  from stores s
  left join widget_settings ws on ws.store_id = s.id
  where s.domain = v_input
  limit 1;

  if v_result is not null then
    return v_result;
  end if;

  -- 5) Partial matches as last resort
  select jsonb_build_object(
    'id', s.id, 'name', s.name, 'domain', s.domain, 'plan', coalesce(s.plan, 'Free'),
    'remaining_leads', coalesce(s.remaining_leads, 0), 'max_leads', coalesce(s.max_leads, 100),
    'widget_settings',
      coalesce(
        jsonb_build_object(
          'heading', ws.heading, 'description', ws.description, 'button_text', ws.button_text,
          'background_color', ws.background_color, 'text_color', ws.text_color,
          'button_color', ws.button_color, 'overlay_opacity', ws.overlay_opacity,
          'is_active', ws.is_active, 'show_email', ws.show_email, 'show_phone', ws.show_phone,
          'discount_code', ws.discount_code, 'redirect_url', ws.redirect_url, 'show_coupon_page', ws.show_coupon_page
        ),
        '{}'::jsonb
      )
  )
  into v_result
  from stores s
  left join widget_settings ws on ws.store_id = s.id
  where s.domain ilike '%' || v_domain || '%' or s.store_slug ilike '%' || v_slug || '%'
  limit 1;

  return v_result; -- may be null if not found
end;
$$;

-- Allow anon to execute this function (read-only, safe payload)
grant execute on function public.get_public_store(text) to anon;

import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputHdmiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmiW100'

      short_name='SettingsInputHdmi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.3 18.7-3-6V9.05q0-.325.213-.538.212-.212.537-.212h.25V6.1q0-.65.425-1.075Q8.15 4.6 8.8 4.6h6.4q.65 0 1.075.425.425.425.425 1.075v2.2h.25q.325 0 .538.212.212.213.212.538v3.65l-3 6v1.25q0 .325-.212.537-.213.213-.538.213h-3.9q-.325 0-.537-.213-.213-.212-.213-.537ZM8 8.3h2.15V6.625q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V8.3h2.3V6.625q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V8.3H16V6.1q0-.35-.225-.575Q15.55 5.3 15.2 5.3H8.8q-.35 0-.575.225Q8 5.75 8 6.1ZM10 20h4v-1.5l3-6V9H7v3.5l3 6Zm2-5.5Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmiW100.displayName = 'AmauiIconMaterialSettingsInputHdmiW100';

export default IconMaterialSettingsInputHdmiW100;

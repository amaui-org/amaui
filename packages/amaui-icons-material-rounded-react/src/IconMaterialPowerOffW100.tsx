import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffW100'

      short_name='PowerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.25 19.7q-.325 0-.537-.213-.213-.212-.213-.537v-1.8L7.75 14.4q-.2-.2-.325-.488-.125-.287-.125-.587V9.8q0-.375.138-.713.137-.337.487-.512l.575.575q-.2 0-.35.175Q8 9.5 8 9.8v3.85l3.2 3.2V19h1.6v-2.15l1.2-1.2L2.2 3.85q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l17.9 17.9q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-5.6-5.6-1 1v1.8q0 .325-.212.537-.213.213-.538.213Zm5.45-9.9v3.525q0 .3-.087.55-.088.25-.213.375l-.4-.4V9.8q0-.3-.25-.55Q15.5 9 15.2 9h-4.05l-1.4-1.4V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V8.3h3.1V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4l-.35-.35h1.3q.625 0 1.062.437.438.438.438 1.063Zm-3.075 1.675ZM11 12.65Z"/>
    </Icon>
  );
});

IconMaterialPowerOffW100.displayName = 'AmauiIconMaterialPowerOffW100';

export default IconMaterialPowerOffW100;

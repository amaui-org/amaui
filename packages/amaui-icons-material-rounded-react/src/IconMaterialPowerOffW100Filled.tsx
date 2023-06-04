import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffW100Filled'

      short_name='PowerOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.7 9.8v3.525q0 .3-.125.587-.125.288-.325.488l.15-.15L9.75 7.6V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V8.3h3.1V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4l-.35-.35h1.3q.625 0 1.062.437.438.438.438 1.063Zm-5.45 9.9q-.325 0-.537-.213-.213-.212-.213-.537v-1.8L7.75 14.4q-.2-.2-.325-.488-.125-.287-.125-.587V9.8q0-.35.138-.65.137-.3.562-.5v1.025L2.2 3.85q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l17.9 17.9q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-5.6-5.6-1 1v1.8q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialPowerOffW100Filled.displayName = 'AmauiIconMaterialPowerOffW100Filled';

export default IconMaterialPowerOffW100Filled;

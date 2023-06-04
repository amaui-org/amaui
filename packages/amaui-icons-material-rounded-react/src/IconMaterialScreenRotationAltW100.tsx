import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRotationAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationAltW100'

      short_name='ScreenRotationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.525 19.9-5.9-5.875q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l5.9 5.9q.225.25.575.238.35-.013.575-.238l5.4-5.4H16.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H20q.325 0 .538.212.212.213.212.538v3.6q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V14.5l-5.4 5.4q-.425.425-1.062.425-.638 0-1.063-.425ZM7.6 10.65H4q-.325 0-.537-.212-.213-.213-.213-.538V6.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.175l5.4-5.4q.425-.425 1.063-.425.637 0 1.062.425l5.9 5.875q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-5.9-5.9q-.225-.25-.575-.238-.35.013-.575.238l-5.4 5.4H7.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationAltW100.displayName = 'AmauiIconMaterialScreenRotationAltW100';

export default IconMaterialScreenRotationAltW100;

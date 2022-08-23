import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVaccinesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VaccinesSharp'
      short_name='Vaccines'

      {...props}
    >
      <path d="M8 22.5 6 21V17H3V7.5H2V5.5H6V4H4.5V2H9.5V4H8V5.5H12V7.5H11V17H8ZM5 15H9V13.5H6.5V12H9V10.5H6.5V9H9V7.5H5ZM13 22V13.5Q13 12.775 13.25 12.3Q13.5 11.825 13.775 11.475Q14.05 11.125 14.275 10.912Q14.5 10.7 14.5 10.5V10H13.5V8H20.5V10H19.5V10.5Q19.5 10.7 19.75 10.95Q20 11.2 20.3 11.55Q20.575 11.9 20.788 12.375Q21 12.85 21 13.5V22ZM15 14H19V13.5Q19 13.125 18.775 12.85Q18.55 12.575 18.275 12.25Q18 11.925 17.75 11.525Q17.5 11.125 17.5 10.5V10H16.5V10.5Q16.5 11.1 16.263 11.5Q16.025 11.9 15.75 12.225Q15.475 12.55 15.238 12.837Q15 13.125 15 13.5ZM15 17H19V15.5H15ZM15 20H19V18.5H15ZM15 17H19Z"/>
    </Icon>
  );
});

IconMaterialVaccinesSharp.displayName = 'AmauiIconMaterialVaccinesSharp';

export default IconMaterialVaccinesSharp;

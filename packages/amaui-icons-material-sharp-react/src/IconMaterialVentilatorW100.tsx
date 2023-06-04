import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVentilatorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VentilatorW100'

      short_name='Ventilator'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M510 408h180V308H510v100ZM172 768q17 0 28.5-11.5T212 728q0-17-11.5-28.5T172 688q-17 0-28.5 11.5T132 728q0 17 11.5 28.5T172 768Zm308 136q-81 0-151.5-31T204 788q-8 4-15.656 6-7.655 2-15.9 2Q143 796 123.5 776.5 104 757 104 728q0-16 6-29t17-22q-12.76-29.302-20.88-59.651Q98 587 94 555l28-3q3 29 11 57t19 54q5-2 10-2.5t10-.5q29 0 48.5 19.5T240 728q0 11.846-4 22.423Q232 761 225 770q47 48 109 75.5T466 876V678q0-27-19.5-46.5T400 612q-56 0-95-39t-39-95q0-56 39-95t95-39h82v-64h236v64h46v28h-46v64H482v-64h-82q-45 0-75.5 30.5T294 478q0 45 30.5 75.5T400 584q39.167 0 66.583 27.417Q494 638.833 494 678v198q107-4 191.5-64.5T811 656l-46-24 13-24 43 22q6.25-18.604 10.625-38.302T838 552l29 3q-1.714 22.921-6.857 44.961Q855 622 847 643l44 22-12 24-42-20q-45 105-141 170t-216 65Zm30-496V308v100ZM172 728Z"/>
    </Icon>
  );
});

IconMaterialVentilatorW100.displayName = 'AmauiIconMaterialVentilatorW100';

export default IconMaterialVentilatorW100;

import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpo2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spo2Filled'

      short_name='Spo2'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 896q-17 0-28.5-11.5T440 856V696q0-17 11.5-28.5T480 656h100q17 0 28.5 11.5T620 696v160q0 17-11.5 28.5T580 896H480Zm20-60h60V716h-60v120Zm220 140q-17 0-28.5-11.5T680 936v-70q0-17 11.5-28.5T720 826h80v-30h-90q-13 0-21.5-8.5T680 766q0-13 8.5-21.5T710 736h110q17 0 28.5 11.5T860 776v70q0 17-11.5 28.5T820 886h-80v30h90q13 0 21.5 8.5T860 946q0 13-8.5 21.5T830 976H720Zm-360-2q-123-14-201.5-105.5T80 648q0-65 29-128.5t73-121Q226 341 277.5 290t95.5-90q6-5 12.5-7.5T400 190q8 0 14.5 2.5T427 200q41 36 85 79t83 90.5q39 47.5 69.5 99.5T710 576H440q-33 0-56.5 23.5T360 656v318Z"/>
    </Icon>
  );
});

IconMaterialSpo2Filled.displayName = 'AmauiIconMaterialSpo2Filled';

export default IconMaterialSpo2Filled;

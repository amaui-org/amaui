import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOxygenSaturationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OxygenSaturationFilled'

      short_name='OxygenSaturation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 616q-66 0-113-47t-47-113q0-66 47-113t113-47h40V176q0-17 11.5-28.5T360 136h240q17 0 28.5 11.5T640 176v120h40q66 0 113 47t47 113q0 66-47 113t-113 47h-93q11-11 19.5-24.5T620 563q4-12 14.5-19.5T658 536h22v-80h-22q-39 0-70.5 22.5T544 538q-5 17-20 27.5T491 576h-22q-18 0-33-10.5T416 538q-12-37-43.5-59.5T302 456h-22v80h22q13 0 23 7.5t15 19.5q5 15 13.5 28.5T373 616h-93Zm40 360q-21 0-39.5-10.5T251 936h-91q-50 0-85-35t-35-85V696q0-17 11.5-28.5T80 656q17 0 28.5 11.5T120 696v120q0 17 11.5 28.5T160 856h91q11-19 29.5-29.5T320 816h40v-40q0-17 11.5-28.5T400 736q17 0 28.5 11.5T440 776v40h80v-40q0-17 11.5-28.5T560 736q17 0 28.5 11.5T600 776v40h40q21 0 39.5 10.5T709 856h91q17 0 28.5-11.5T840 816V696q0-17 11.5-28.5T880 656q17 0 28.5 11.5T920 696v120q0 50-35 85t-85 35h-91q-11 19-29.5 29.5T640 976H320Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturationFilled.displayName = 'AmauiIconMaterialOxygenSaturationFilled';

export default IconMaterialOxygenSaturationFilled;

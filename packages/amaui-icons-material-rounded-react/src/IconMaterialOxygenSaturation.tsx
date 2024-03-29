import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOxygenSaturation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OxygenSaturation'

      short_name='OxygenSaturation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 976q-21 0-39.5-10.5T251 936h-91q-50 0-85-35t-35-85V696q0-17 11.5-28.5T80 656q17 0 28.5 11.5T120 696v120q0 17 11.5 28.5T160 856h91q11-19 29.5-29.5T320 816h40v-40q0-17 11.5-28.5T400 736q17 0 28.5 11.5T440 776v40h80v-40q0-17 11.5-28.5T560 736q17 0 28.5 11.5T600 776v40h40q21 0 39.5 10.5T709 856h91q17 0 28.5-11.5T840 816V696q0-17 11.5-28.5T880 656q17 0 28.5 11.5T920 696v120q0 50-35 85t-85 35h-91q-11 19-29.5 29.5T640 976H320ZM120 456q0-66 47-113t113-47h40V176q0-17 11.5-28.5T360 136q17 0 28.5 11.5T400 176v120q0 33-23.5 56.5T320 376h-40q-33 0-56.5 23.5T200 456q0 33 23.5 56.5T280 536v80q-66 0-113-47t-47-113Zm720 0q0 66-47 113t-113 47v-80q33 0 56.5-23.5T760 456q0-33-23.5-56.5T680 376h-40q-33 0-56.5-23.5T560 296V176q0-17 11.5-28.5T600 136q17 0 28.5 11.5T640 176v120h40q66 0 113 47t47 113ZM480 616Zm-11 40q-44 0-79.5-25.5T340 563q-5-12-15-19.5t-23-7.5h-22v-80h22q39 0 70.5 22.5T416 538q5 17 20 27.5t33 10.5h22q18 0 33-10.5t20-27.5q12-37 43.5-59.5T658 456h22v80h-22q-13 0-23.5 7.5T620 563q-14 42-49.5 67.5T491 656h-22Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturation.displayName = 'AmauiIconMaterialOxygenSaturation';

export default IconMaterialOxygenSaturation;

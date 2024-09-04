import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachFileOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileOffW100'

      short_name='AttachFileOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-132q-87 0-147-61t-60-148v-305L102-818q-4-4-4.5-9.5T102-838q5-5 10-5t10 5l716 716q4 4 4.5 9.5T838-102q-5 5-10 5t-10-5L667-253q-24 54-73.5 87.5T481-132ZM302-618v277q0 75 52 128t127 53q57 0 101-31.5t64-82.5l-88-88q0 32-22.5 57T481-280q-32 0-55.5-23T402-359v-159L302-618Zm128 128v131q0 21 14.5 36t35.5 15q21 0 35.5-15t14.5-36v-31L430-490Zm228 77v-253q0-6 4-10t10-4q6 0 10 4t4 10v282l-28-29ZM530-543v-142q0-48-33-81.5T416-800q-29 0-52.5 13T324-752l-20-20q20-26 48.5-41t63.5-15q60 0 101 42t41 102v170l-28-29ZM403-672q2-4 5-6t8-2q6 0 10 4t4 10v22l-27-28Z"/>
    </Icon>
  );
});

IconMaterialAttachFileOffW100.displayName = 'AmauiIconMaterialAttachFileOffW100';

export default IconMaterialAttachFileOffW100;

import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPassword2OffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Password2OffW100'

      short_name='Password2Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M181.06-459Q144-459 118-485.15q-26-26.14-26-63.5 0-37.35 25.94-62.85t63-25.5Q218-637 244-611.33q26 25.66 26 62.33 0 37.5-25.94 63.75t-63 26.25Zm598-1Q742-460 716-485.94t-26-63Q690-586 715.94-612t63-26Q816-638 842-612.06t26 63Q868-512 842.06-486t-63 26ZM569-549q0 2.67-.5 5.33-.5 2.67-.5 5.67-2 9-10.5 12t-16.5-5l-78-80q-7-7-4.5-15.5T470-637q2 0 5-.5t5-.5q37.08 0 63.04 25.96T569-549ZM152-240q-8.5 0-14.25-5.75T132-260q0-8.5 5.75-14.25T152-280h488L102-818q-4-4-4.5-9.5T102-838q5-5 10-5t10 5l716 716q4 4 4.5 9.5T838-102q-5 5-10 5t-10-5L680-240H152Z"/>
    </Icon>
  );
});

IconMaterialPassword2OffW100.displayName = 'AmauiIconMaterialPassword2OffW100';

export default IconMaterialPassword2OffW100;

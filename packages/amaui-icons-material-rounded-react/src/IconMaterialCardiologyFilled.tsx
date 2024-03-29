import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardiologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardiologyFilled'

      short_name='Cardiology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m428 605-34-51q-5-8-14-13t-19-5H99q-11-26-15-50t-4-50q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 26-4 50t-15 50H623l-69-102q-6-9-15.5-13.5T518 416q-13 0-22.5 7.5T482 443l-54 162Zm-1 297q-105-94-174.5-163T145 616h192l69 102q6 9 15.5 13.5T442 736q13 0 22.5-7.5T478 709l54-163 35 52q5 8 14 13t19 5h215q-38 54-107.5 123T533 902q-11 11-25 16t-28 5q-14 0-28-5t-25-16Z"/>
    </Icon>
  );
});

IconMaterialCardiologyFilled.displayName = 'AmauiIconMaterialCardiologyFilled';

export default IconMaterialCardiologyFilled;

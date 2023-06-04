import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyScreenOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyScreenOffW100'

      short_name='PrivacyScreenOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M842 978 708 844H192q-26 0-43-17t-17-43V368q0-19 11-33.5t34-21.5l-77-77q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5ZM160 797l251-251-121-120-130 130v241Zm0-280 111-111-71-70h-7q-14 0-23.5 9t-9.5 23v149Zm19 299h501L430 565 179 816Zm644-8-23-24V368q0-13-9.5-22.5T768 336H659L505 490l-19-19 134-135H379l-14 14-41-42h444q26 0 43 17t17 43v416q0 7-1.5 13t-3.5 11ZM440 576Zm136-16Z"/>
    </Icon>
  );
});

IconMaterialPrivacyScreenOffW100.displayName = 'AmauiIconMaterialPrivacyScreenOffW100';

export default IconMaterialPrivacyScreenOffW100;

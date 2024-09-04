import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHearingAidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingAidFilled'

      short_name='HearingAid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-80q-57 0-100-34t-62-90q-17-50-36.5-74T417-334q-67-48-102-119.5T280-600q0-118 81-199t199-81q118 0 199 81t81 199h-80q0-85-57.5-142.5T560-800q-85 0-142.5 57.5T360-600q0 59 28 113.5t79 90.5q48 34 76.5 65.5T589-245q11 35 33.5 60t57.5 25q32 0 56-23.5t24-56.5q0-26-5-51.5T739-338l-68 54-100-176q-61 5-106-36.5T420-600q0-58 41-99t99-41q65 0 106.5 49T698-579l165 143-60 48q20 32 28.5 70.5T840-240q0 66-47 113T680-80ZM248-290q-62-63-95-143.5T120-600q0-88 33-168.5T248-912l58 56q-51 51-78.5 117T200-600q0 72 27.5 137.5T306-346l-58 56Z"/>
    </Icon>
  );
});

IconMaterialHearingAidFilled.displayName = 'AmauiIconMaterialHearingAidFilled';

export default IconMaterialHearingAidFilled;

import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedOffW100Filled'

      short_name='EncryptedOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M463-386h36q7 0 11-5.5t2-11.5l-1-6-52-52-11 57q-2 7 3 12.5t12 5.5Zm197 126q-32 40-71 69.5T502-142q-5 2-11 3t-11 1q-1 0-22-4-115-45-180.5-148.5T212-516v-192l-70-70q-4-4-4.5-9.5T142-798q5-5 10-5t10 5l640 640q4 4 4.5 9.5T802-138q-5 5-10 5t-10-5L660-260Zm88-422v166q0 27-4.5 55.5T730-400q-3 9-9.5 15t-14.5 8q-8 2-17-.5t-16-9.5L526-534q3-6 5-12.5t2-13.5q0-22-15.5-37.5T480-613q-7 0-13.5 2t-12.5 5L335-725q-5-5-7-10t-2-11q0-9 5-16.5t15-11.5l113-42q10-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5Z"/>
    </Icon>
  );
});

IconMaterialEncryptedOffW100Filled.displayName = 'AmauiIconMaterialEncryptedOffW100Filled';

export default IconMaterialEncryptedOffW100Filled;

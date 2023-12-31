import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeartCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartCheckW100'

      short_name='HeartCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m718-389 131-132q4-4 9.5-4t10.5 4q5 4 4.5 10t-4.5 10L739-371q-9 9-21.5 9t-21.5-9l-45-45q-4-4-4.5-9.5T651-436q4-4 10-4t10 4l47 47ZM440-501Zm-22 291q-97-89-160.5-152t-100-110.5Q121-520 106.5-558T92-634q0-71 48.5-119.5T260-802q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q66 0 112.5 42.5T787-654h-28q-7-52-46-86t-93-34q-48 0-88.5 27.5T454-660h-28q-38-60-78-87t-88-27q-59 0-99.5 40T120-634q0 34 14 69t50 80.5q36 45.5 98 107T440-228q32-29 60-55t52-49l3 3 7 7 7 7 3 3q-24 23-51.5 48T462-210l-2 2q-8 8-20 8t-20-8l-2-2Z"/>
    </Icon>
  );
});

IconMaterialHeartCheckW100.displayName = 'AmauiIconMaterialHeartCheckW100';

export default IconMaterialHeartCheckW100;

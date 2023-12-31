import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonCelebrate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonCelebrate'

      short_name='PersonCelebrate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160v-160q-51-4-100-11t-98-18q-17-4-27-19t-5-32q5-17 20.5-25t32.5-4q73 17 147.5 23t149.5 6q75 0 149.5-6T777-429q18-4 33 4t20 25q5 17-5.5 32T797-349q-49 11-98 18t-99 11v160q0 17-11.5 28.5T560-120H400q-17 0-28.5-11.5T360-160Zm120-280q-34 0-57-23t-23-57q0-33 23-56.5t57-23.5q33 0 56.5 23.5T560-520q0 34-23.5 57T480-440ZM180-560q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T240-620q0 26-17.5 43T180-560Zm600 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T840-620q0 26-17.5 43T780-560ZM290-710q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T350-770q0 26-17.5 43T290-710Zm380 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T730-770q0 26-17.5 43T670-710Zm-190-50q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T540-820q0 26-17.5 43T480-760Z"/>
    </Icon>
  );
});

IconMaterialPersonCelebrate.displayName = 'AmauiIconMaterialPersonCelebrate';

export default IconMaterialPersonCelebrate;

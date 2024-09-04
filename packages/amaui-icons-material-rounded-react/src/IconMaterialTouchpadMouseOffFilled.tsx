import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchpadMouseOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseOffFilled'

      short_name='TouchpadMouseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h1l236 236q-18 32-27.5 68.5T360-420v120q0 23 3.5 46.5T375-207q5 17-5 32t-27 15H160Zm500-560q-63 0-118 24.5T446-629L343-732q-19-19-8.5-43.5T372-800h428q33 0 56.5 23.5T880-720v35q0 17-16 24t-30-4q-38-27-82-41t-92-14Zm40 280v-197q75 13 126 67.5T880-440H700Zm-80-197v182L500-575q24-24 54.5-40t65.5-22Zm242 424L715-360h165v60q0 23-5 45t-13 42ZM660-80q-92 0-156-64t-64-156v-60h47L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28.5T848-56q-12 12-28.5 12T791-56l-42-42q-20 9-42.5 13.5T660-80Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseOffFilled.displayName = 'AmauiIconMaterialTouchpadMouseOffFilled';

export default IconMaterialTouchpadMouseOffFilled;

import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPasskeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasskeyFilled'

      short_name='Passkey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-480q-66 0-112.5-47T281-640q0-66 46.5-113T440-800q66 0 113 47t47 113q0 66-47 113t-113 47Zm275 342-26-31q-5-5-7-12t-2-14v-132q-35-13-57.5-43.5T600-440q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 69.5T760-327v7l26 26q6 6 6 14t-6 14l-26 26 27 26q5 5 5.5 13.5T788-186l-42 48q-6 7-15.5 7t-15.5-7Zm-515-22q-33 0-56.5-23.5T120-240v-31q0-34 17-63t47-44q51-26 115.5-44T440-440q21 0 41 1.5t40 4.5q2 45 21.5 86t57.5 67v121H200Zm520-220q25 0 42.5-17.5T780-440q0-25-17.5-42.5T720-500q-25 0-42.5 17.5T660-440q0 25 17.5 42.5T720-380Z"/>
    </Icon>
  );
});

IconMaterialPasskeyFilled.displayName = 'AmauiIconMaterialPasskeyFilled';

export default IconMaterialPasskeyFilled;

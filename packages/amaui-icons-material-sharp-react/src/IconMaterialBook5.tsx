import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book5'

      short_name='Book5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-80q-45 0-77.5-30.5T160-186v-558q0-38 23.5-68t61.5-38l395-78v640l-379 76q-9 2-15 9.5t-6 16.5q0 11 9 18.5t21 7.5h450v-640h80v720H270Zm90-233 200-39v-478l-200 39v478Zm-80 16v-478l-15 3q-11 2-18 9.5t-7 18.5v457q5-2 10.5-3.5T261-293l19-4Zm-40-472v482-482Z"/>
    </Icon>
  );
});

IconMaterialBook5.displayName = 'AmauiIconMaterialBook5';

export default IconMaterialBook5;

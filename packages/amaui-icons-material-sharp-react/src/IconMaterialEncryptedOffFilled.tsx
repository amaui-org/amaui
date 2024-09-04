import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedOffFilled'

      short_name='EncryptedOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m430-418-10 58h68l-58-58ZM792-56 662-186q-38 39-84.5 65.5T480-80q-139-35-229.5-159.5T160-516v-172L56-792l56-56 736 736-56 56Zm-38-262L551-522q5-8 7-17.5t2-20.5q0-33-23.5-56.5T480-640q-11 0-20 2t-17 7L272-802l208-78 320 120v244q0 51-11.5 101T754-318Z"/>
    </Icon>
  );
});

IconMaterialEncryptedOffFilled.displayName = 'AmauiIconMaterialEncryptedOffFilled';

export default IconMaterialEncryptedOffFilled;

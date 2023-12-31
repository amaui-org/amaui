import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedEmail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedEmail'

      short_name='StackedEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280v-560h720v560H200Zm360-189L280-663v303h560v-303L560-469Zm0-97 280-194H280l280 194ZM40-120v-580h80v500h660v80H40Zm800-640H280h560Z"/>
    </Icon>
  );
});

IconMaterialStackedEmail.displayName = 'AmauiIconMaterialStackedEmail';

export default IconMaterialStackedEmail;

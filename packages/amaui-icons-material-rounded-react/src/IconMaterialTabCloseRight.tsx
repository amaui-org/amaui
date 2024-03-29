import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabCloseRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseRight'

      short_name='TabCloseRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 632 86 86q11 11 28 11t28-11q11-11 11-28t-11-28l-86-86 86-86q11-11 11-28t-11-28q-11-11-28-11t-28 11l-86 86-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l86 86-86 86q-11 11-11 28t11 28q11 11 28 11t28-11l86-86ZM200 856V296v560-1 1Zm0 80q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v334q-19-7-39-10.5t-41-3.5V296H200v560h320q0 21 3.5 41t10.5 39H200Zm567-40H640q-17 0-28.5-11.5T600 856q0-17 11.5-28.5T640 816h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L788 988q-11 11-27.5 11.5T732 988q-11-11-11-28t11-28l35-36Z"/>
    </Icon>
  );
});

IconMaterialTabCloseRight.displayName = 'AmauiIconMaterialTabCloseRight';

export default IconMaterialTabCloseRight;

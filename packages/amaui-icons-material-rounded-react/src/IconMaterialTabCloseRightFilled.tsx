import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabCloseRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseRightFilled'

      short_name='TabCloseRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M767 896H640q-17 0-28.5-11.5T600 856q0-17 11.5-28.5T640 816h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L788 988q-11 11-27.5 11.5T732 988q-11-11-11-28t11-28l35-36Zm-567 40q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v334q-19-7-39.5-10.5T759 616q-39 0-74 12t-64 33l-85-85 86-86q11-11 11-28t-11-28q-11-11-28-11t-28 11l-86 86-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l86 86-86 86q-11 11-11 28t11 28q11 11 28 11t28-11l86-86 85 85q-21 29-33 64.5T520 856q0 21 3.5 41t10.5 39H200Z"/>
    </Icon>
  );
});

IconMaterialTabCloseRightFilled.displayName = 'AmauiIconMaterialTabCloseRightFilled';

export default IconMaterialTabCloseRightFilled;

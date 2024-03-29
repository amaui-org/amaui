import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDownwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardFilled'

      short_name='ArrowDownward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.575q-.2 0-.375-.063-.175-.062-.325-.212l-6.6-6.6q-.3-.3-.3-.713 0-.412.3-.712t.7-.3q.4 0 .7.3l4.9 4.9v-11.2q0-.425.288-.7Q11.575 4 12 4t.713.287Q13 4.575 13 5v11.175l4.9-4.9q.3-.3.7-.3.4 0 .7.3.3.3.3.712 0 .413-.3.713l-6.6 6.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardFilled.displayName = 'AmauiIconMaterialArrowDownwardFilled';

export default IconMaterialArrowDownwardFilled;

import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonBookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonBookW100'

      short_name='PersonBook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.5-272Q416-272 355-250.5T240-184v24h479v-24q-52-45-113-66.5T480.5-272Zm-.5-28q69 0 129 21t111 59v-580H240v580q51-38 111-59t129-21Zm0-124q-35 0-60.5-25.5T394-510q0-35 25.5-60.5T480-596q35 0 60.5 25.5T566-510q0 35-25.5 60.5T480-424ZM212-132v-696h536v696H212Zm268-264q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Zm0-114Z"/>
    </Icon>
  );
});

IconMaterialPersonBookW100.displayName = 'AmauiIconMaterialPersonBookW100';

export default IconMaterialPersonBookW100;

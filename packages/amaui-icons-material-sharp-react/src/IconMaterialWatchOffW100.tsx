import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchOffW100'

      short_name='WatchOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.9 14.95-.525-.525q.275-.55.45-1.125T17 12q0-2.075-1.462-3.538Q14.075 7 12 7q-.725 0-1.35.188-.625.187-1.075.437l-.5-.5.125-.075.75-2.7h4.1l.75 2.7q1.35.7 2.125 2.063.775 1.362.775 2.887 0 .85-.225 1.575T16.9 14.95Zm-6.85-8.3q.425-.15.975-.25T12 6.3q.475 0 1 .1t.95.25l-.45-1.6h-3ZM19.3 21.2l-4.35-4.35-.15.1-.75 2.7h-4.1l-.75-2.7q-1.275-.675-2.087-1.988Q6.3 13.65 6.3 12q0-.8.213-1.562.212-.763.612-1.413L2.8 4.7l.5-.5 16.5 16.5Zm-8.8-2.25h3l.45-1.6q-.425.175-.962.262-.538.088-.988.088-.45 0-.987-.1-.538-.1-.963-.25ZM12 17q.6 0 1.263-.163.662-.162 1.162-.487L7.65 9.575q-.35.575-.5 1.212Q7 11.425 7 12q0 2.075 1.463 3.537Q9.925 17 12 17ZM10.05 5.05H13.95h-3.9Zm.45 13.9h-.45H13.95h-.45Z"/>
    </Icon>
  );
});

IconMaterialWatchOffW100.displayName = 'AmauiIconMaterialWatchOffW100';

export default IconMaterialWatchOffW100;

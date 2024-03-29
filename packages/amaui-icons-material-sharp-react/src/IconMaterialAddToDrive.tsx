import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToDrive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToDrive'

      short_name='AddToDrive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 21v-3h-3v-2h3v-3h2v3h3v2h-3v3Zm-12.375.5q-.525 0-.975-.275-.45-.275-.725-.725l-2.35-4.1q-.275-.45-.275-1t.275-1l6.35-10.9q.275-.5.738-.75.462-.25.987-.25h4.7q.525 0 .988.25.462.25.737.75l4.475 7.675q-.375-.125-.75-.163-.375-.037-.8-.037h-.425q-.2 0-.425.05L14.35 4.5h-4.7L3.3 15.4l2.35 4.1h7.9q.275.575.638 1.075.362.5.862.925ZM7.25 17l-.725-1.275L11.1 7.75h1.8l2.525 4.4q-.45.35-.787.713-.338.362-.638.812L12 10.2 9.25 15h4.1q-.2.5-.275.988Q13 16.475 13 17Z"/>
    </Icon>
  );
});

IconMaterialAddToDrive.displayName = 'AmauiIconMaterialAddToDrive';

export default IconMaterialAddToDrive;

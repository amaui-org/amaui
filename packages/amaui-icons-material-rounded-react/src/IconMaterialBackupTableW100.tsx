import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackupTableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupTableW100'

      short_name='BackupTable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 16H13v-5.65H7.35v4.85q0 .3.25.55.25.25.55.25Zm-.8-6.35h12V4.8q0-.3-.25-.55-.25-.25-.55-.25H8.15q-.3 0-.55.25-.25.25-.25.55ZM13.7 16h4.85q.3 0 .55-.25.25-.25.25-.55v-4.85H13.7Zm-5.55.7q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225H16.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialBackupTableW100.displayName = 'AmauiIconMaterialBackupTableW100';

export default IconMaterialBackupTableW100;

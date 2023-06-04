import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeCommentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentW100Filled'

      short_name='ModeComment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.425 18.225 17.9 16.7H4.8q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v12.9q0 .5-.462.687-.463.188-.813-.162Z"/>
    </Icon>
  );
});

IconMaterialModeCommentW100Filled.displayName = 'AmauiIconMaterialModeCommentW100Filled';

export default IconMaterialModeCommentW100Filled;

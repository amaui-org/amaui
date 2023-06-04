import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrameInspectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameInspectW100'

      short_name='FrameInspect'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 652q48 0 82-34t34-82q0-48-34-82t-82-34q-48 0-82 34t-34 82q0 48 34 82t82 34Zm0 28q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 26-8.5 49T551 628l103 102q4 4 4.5 9.5T654 750q-5 5-10 5t-10-5L532 647q-20 16-43 24.5t-49 8.5ZM232 884q-26 0-43-17t-17-43V710q0-6 4-10t10-4q6 0 10 4t4 10v114q0 12 10 22t22 10h114q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm382 0q-6 0-10-4t-4-10q0-6 4-10t10-4h114q12 0 22-10t10-22V710q0-6 4-10t10-4q6 0 10 4t4 10v114q0 26-17 43t-43 17H614ZM186 456q-6 0-10-4t-4-10V328q0-26 17-43t43-17h114q6 0 10 4t4 10q0 6-4 10t-10 4H232q-12 0-22 10t-10 22v114q0 6-4 10t-10 4Zm588 0q-6 0-10-4t-4-10V328q0-12-10-22t-22-10H614q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43v114q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialFrameInspectW100.displayName = 'AmauiIconMaterialFrameInspectW100';

export default IconMaterialFrameInspectW100;

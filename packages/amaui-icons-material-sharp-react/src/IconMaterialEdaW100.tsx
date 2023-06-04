import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdaW100'

      short_name='Eda'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M315 564V216h28v348h-28Zm142 0V176h28v388h-28Zm143 177V256h28v469l-28 16ZM200 950h349l262-265-26-20-334 198-124-165H200v252Zm-28 28V670h169l116 155 171-100 159-93 68 50-296 296H172Zm28-308h-28V296h28v374Zm0-106h400-400Zm0 386h349-349Z"/>
    </Icon>
  );
});

IconMaterialEdaW100.displayName = 'AmauiIconMaterialEdaW100';

export default IconMaterialEdaW100;

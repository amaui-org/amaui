import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIframeOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeOffW100'

      short_name='IframeOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M852 988 708 844H132V308h80v40L90 226l20-20 762 762-20 20ZM160 816h520L280 416H160v400Zm640-32V416H432L324 308h504v504l-28-28Zm-96-96-28-28V540H556l-28-28h176v176Z"/>
    </Icon>
  );
});

IconMaterialIframeOffW100.displayName = 'AmauiIconMaterialIframeOffW100';

export default IconMaterialIframeOffW100;

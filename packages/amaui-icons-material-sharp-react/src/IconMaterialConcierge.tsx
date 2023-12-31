import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConcierge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Concierge'

      short_name='Concierge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-440v-440h240v58l280-78 320 100v160H680v80L358-440H40Zm80-80h80v-280h-80v280Zm160 0h64l256-94v-26h-71l-117 38-24-76 125-42h283v-22l-238-74-278 76v220ZM400-80h520v-80H400v80Zm40-120h440q0-81-51.5-141.5T700-416v-65h-80v65q-78 14-129 74.5T440-200Zm105-81q19-27 49-43.5t66-16.5q35 0 64.5 16.5T773-281H545Zm114 0Z"/>
    </Icon>
  );
});

IconMaterialConcierge.displayName = 'AmauiIconMaterialConcierge';

export default IconMaterialConcierge;

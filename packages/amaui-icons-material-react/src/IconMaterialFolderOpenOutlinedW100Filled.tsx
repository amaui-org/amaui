import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenOutlinedW100Filled'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M4.65 18.7Q4.075 18.7 3.688 18.312Q3.3 17.925 3.3 17.35V7.8Q3.3 7.225 3.763 6.762Q4.225 6.3 4.8 6.3H11L12 7.3H19.2Q19.625 7.3 19.95 7.488Q20.275 7.675 20.475 8H4V17.2Q4 17.475 4.138 17.65Q4.275 17.825 4.5 17.95L6.875 10H22.825L20.5 17.75Q20.375 18.175 20.013 18.438Q19.65 18.7 19.2 18.7Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOpenOutlinedW100Filled;

import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenRoundedW100'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M4.65 18.7Q4.075 18.7 3.688 18.312Q3.3 17.925 3.3 17.35V7.8Q3.3 7.225 3.763 6.762Q4.225 6.3 4.8 6.3H10.725Q10.85 6.3 10.975 6.35Q11.1 6.4 11.2 6.5L12 7.3H19.2Q19.625 7.3 19.95 7.488Q20.275 7.675 20.475 8H11.725L10.725 7H4.8Q4.45 7 4.225 7.225Q4 7.45 4 7.8V17.2Q4 17.475 4.138 17.65Q4.275 17.825 4.5 17.95L6.725 10.5Q6.8 10.275 6.988 10.137Q7.175 10 7.4 10H21.875Q22.225 10 22.438 10.275Q22.65 10.55 22.55 10.9L20.5 17.75Q20.375 18.175 20.013 18.438Q19.65 18.7 19.2 18.7ZM5.225 18H19.7L21.875 10.7H7.4ZM5.225 18 7.4 10.7 5.225 18ZM4 9.5V7.8Q4 7.45 4 7.225Q4 7 4 7V8Q4 8 4 8.438Q4 8.875 4 9.5Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenRoundedW100.displayName = 'AmauiIconMaterialFolderOpenRoundedW100';

export default IconMaterialFolderOpenRoundedW100;

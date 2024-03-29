import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBia = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bia'

      short_name='Bia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 816h80V696h80v120h80V696h80v120h80V696h80v120h160V539q-33 19-74.5 28t-85.5 9q-45 0-88-10t-77-30H160v280Zm120-360h126q-3-9-4.5-19t-1.5-21q0-11 1.5-21t4.5-19H280v80Zm360 40q58 0 109-15t51-65q0-50-51-65t-109-15q-58 0-109 15t-51 65q0 50 51 65t109 15ZM80 896V456h120V296h275q34-20 77-30t88-10q91 0 165.5 39.5T880 416v480H80Zm80-80h640-640Z"/>
    </Icon>
  );
});

IconMaterialBia.displayName = 'AmauiIconMaterialBia';

export default IconMaterialBia;

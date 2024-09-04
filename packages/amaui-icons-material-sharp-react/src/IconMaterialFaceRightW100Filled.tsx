import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaceRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaceRightW100Filled'

      short_name='FaceRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M611-499q-12.33 0-20.66-8.68-8.34-8.67-8.34-21.5 0-12.82 8.47-21.32 8.48-8.5 21-8.5 12.53 0 21.53 8.68 9 8.67 9 21.5 0 12.82-8.91 21.32-8.92 8.5-22.09 8.5Zm-182.18 0q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5ZM344-329q-60-35-96-96t-36-135q0-112.22 77.84-190.11 77.84-77.89 190-77.89T670-750.11q78 77.89 78 190.11 0 74-36 135t-96 96l-21-20q56-31 90.5-86.66Q720-491.33 720-560q0-17.03-2.5-32.52Q715-608 710-624q-14 3-28.5 4.5T653-618q-69 2-130.5-27T417-727q-25 58-71 100.5T240-564v3q-1 69 33.5 125t91.5 87l-21 20ZM485-71l-19-20 89-90H351v-28h204l-89-89 19-20 124 123L485-71Z"/>
    </Icon>
  );
});

IconMaterialFaceRightW100Filled.displayName = 'AmauiIconMaterialFaceRightW100Filled';

export default IconMaterialFaceRightW100Filled;

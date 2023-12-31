import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallQualityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallQualityFilled'

      short_name='CallQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M758-80q-129 0-251.5-57.5t-217-152q-94.5-94.5-152-217T80-758v-42h236l37 200-113 116q42 72 105 135t139 109l116-116 200 40v236h-42Zm-78-400q-83 0-141.5-58.5T480-680q0-83 58.5-141.5T680-880q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm-20-80h40v-160h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialCallQualityFilled.displayName = 'AmauiIconMaterialCallQualityFilled';

export default IconMaterialCallQualityFilled;

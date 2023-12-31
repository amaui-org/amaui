import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextureMinusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureMinusFilled'

      short_name='TextureMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M176-120h-56v-56l664-664h57v56L176-120Zm196 0 108-108v108H372Zm188-80v-80h320v80H560ZM120-372v-112l356-356h112L120-372Zm492 12 228-228v112L724-360H612ZM120-680v-160h160L120-680Z"/>
    </Icon>
  );
});

IconMaterialTextureMinusFilled.displayName = 'AmauiIconMaterialTextureMinusFilled';

export default IconMaterialTextureMinusFilled;

import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyVisualizerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVisualizerW100'

      short_name='KeyVisualizer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.725 19.05v-.7h1.7v.7Zm0-3.35V15h6.05v.7Zm0-3.35v-.7h14.75v.7Zm0-3.35v-.7h6.05V9Zm0-3.35v-.7h1.7v.7Zm4.35 13.4v-.7h1.7v.7Zm0-13.4v-.7h1.7v.7Zm4.35 13.4v-.7h1.7v.7Zm0-3.35V15h6.05v.7Zm0-6.7v-.7h6.05V9Zm0-3.35v-.7h1.7v.7Zm4.35 13.4v-.7h1.7v.7Zm0-13.4v-.7h1.7v.7Z"/>
    </Icon>
  );
});

IconMaterialKeyVisualizerW100.displayName = 'AmauiIconMaterialKeyVisualizerW100';

export default IconMaterialKeyVisualizerW100;

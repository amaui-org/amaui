import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeActiveRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveRoundedW100Filled'
      short_name='QuietTimeActive'

      {...props}
    >
      <path d="M19.2 17.225 6.8 4.825q.5-.625 1.088-1.15.587-.525 1.187-.925.375-.25.775-.05t.45.625q.2 1.975 1.025 3.763.825 1.787 2.25 3.212 1.425 1.425 3.213 2.25 1.787.825 3.762 1.025.425.05.613.45.187.4-.038.8-.375.725-.862 1.312-.488.588-1.063 1.088Zm0 3.8-2.4-2.4q-.75.275-1.55.425-.8.15-1.65.15-1.825 0-3.425-.688-1.6-.687-2.8-1.887-1.2-1.2-1.887-2.8-.688-1.6-.688-3.425 0-.825.163-1.625.162-.8.437-1.55L3 4.825q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.112.237.013.138-.112.263t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActiveRoundedW100Filled.displayName = 'AmauiIconMaterialQuietTimeActiveRoundedW100Filled';

export default IconMaterialQuietTimeActiveRoundedW100Filled;

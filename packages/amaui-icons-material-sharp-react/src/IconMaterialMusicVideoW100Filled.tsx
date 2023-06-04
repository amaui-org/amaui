import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoW100Filled'

      short_name='MusicVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4Zm7.675-2.275q.8 0 1.337-.55.538-.55.538-1.325V9h2.5V7.6h-3.2v5.5q-.225-.2-.525-.313-.3-.112-.65-.112-.775 0-1.325.537-.55.538-.55 1.338 0 .775.55 1.325.55.55 1.325.55Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoW100Filled.displayName = 'AmauiIconMaterialMusicVideoW100Filled';

export default IconMaterialMusicVideoW100Filled;

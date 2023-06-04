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
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm6.175-2.275q.775 0 1.325-.55.55-.55.55-1.325V9h1.8q.3 0 .5-.2t.2-.5q0-.275-.212-.488-.213-.212-.488-.212H12.9q-.325 0-.537.212-.213.213-.213.538v4.75q-.225-.2-.525-.313-.3-.112-.65-.112-.775 0-1.325.55-.55.55-.55 1.325 0 .775.55 1.325.55.55 1.325.55Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoW100Filled.displayName = 'AmauiIconMaterialMusicVideoW100Filled';

export default IconMaterialMusicVideoW100Filled;

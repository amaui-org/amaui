import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryMusicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusicW100Filled'

      short_name='LibraryMusic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.1 14.6q.775 0 1.313-.538.537-.537.537-1.312v-5.8h1.975q.275 0 .475-.2.2-.2.2-.5 0-.275-.212-.488-.213-.212-.488-.212H14q-.325 0-.537.212-.213.213-.213.538v5.15q-.225-.275-.512-.413-.288-.137-.638-.137-.775 0-1.312.538-.538.537-.538 1.312t.538 1.312q.537.538 1.312.538Zm-3.95 2.1q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.125q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225h10.775q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusicW100Filled.displayName = 'AmauiIconMaterialLibraryMusicW100Filled';

export default IconMaterialLibraryMusicW100Filled;

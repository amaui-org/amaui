import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAudioFileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioFileW100'

      short_name='AudioFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.75 18.6q.775 0 1.312-.538.538-.537.538-1.312V12.7h1.95q.275 0 .488-.2.212-.2.212-.5 0-.275-.212-.488-.213-.212-.488-.212h-1.9q-.325 0-.537.212-.213.213-.213.538v3.4q-.225-.275-.512-.413-.288-.137-.638-.137-.775 0-1.312.538-.538.537-.538 1.312t.538 1.312q.537.538 1.312.538ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .575.112.275.113.5.338l3.15 3.15q.225.225.337.5.113.275.113.575V19.2q0 .65-.425 1.075-.425.425-1.075.425ZM14.3 4H6.8q-.3 0-.55.25Q6 4.5 6 4.8v14.4q0 .3.25.55.25.25.55.25h10.4q.3 0 .55-.25.25-.25.25-.55V7.7h-2.95q-.325 0-.537-.213-.213-.212-.213-.537ZM6 4v3.7V4v16V4Z"/>
    </Icon>
  );
});

IconMaterialAudioFileW100.displayName = 'AmauiIconMaterialAudioFileW100';

export default IconMaterialAudioFileW100;

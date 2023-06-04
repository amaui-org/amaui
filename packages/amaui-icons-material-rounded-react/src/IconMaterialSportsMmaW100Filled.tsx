import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsMmaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMmaW100Filled'

      short_name='SportsMma'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 19.2q-.325 0-.538-.213-.212-.212-.212-.537V16.2h7.5v2.25q0 .325-.212.537-.213.213-.538.213Zm-1.1-4.5q-.275 0-.475-.163-.2-.162-.25-.437l-.575-2.9q-.05-.125-.05-.2V5.6q0-.65.425-1.075Q7.45 4.1 8.1 4.1h6.4q.65 0 1.075.425Q16 4.95 16 5.6v1.6q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5v3.75q0 .075-.05.2l-.625 2.95q-.05.275-.25.437-.2.163-.475.163Zm2.1-5h2.5q.325 0 .538-.188.212-.187.212-.512t-.212-.513q-.213-.187-.538-.187h-2.5q-.325 0-.537.187Q9.3 8.675 9.3 9t.213.512q.212.188.537.188Z"/>
    </Icon>
  );
});

IconMaterialSportsMmaW100Filled.displayName = 'AmauiIconMaterialSportsMmaW100Filled';

export default IconMaterialSportsMmaW100Filled;

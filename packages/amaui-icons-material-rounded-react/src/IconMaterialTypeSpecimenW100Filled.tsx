import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTypeSpecimenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimenW100Filled'

      short_name='TypeSpecimen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.725 11.15 1.55-4.1h.1l1.6 4.1ZM8.15 16.7q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225H16.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm4.7-4.9q.1 0 .175-.05.075-.05.125-.15l1.025-2.5h3.75l1 2.475q.05.125.138.175.087.05.212.05.2 0 .313-.15.112-.15.037-.35L13.9 6.45q-.075-.175-.212-.275-.138-.1-.338-.1t-.35.087q-.15.088-.2.263l-2.975 7.6q-.075.175.025.325.1.15.3.15Z"/>
    </Icon>
  );
});

IconMaterialTypeSpecimenW100Filled.displayName = 'AmauiIconMaterialTypeSpecimenW100Filled';

export default IconMaterialTypeSpecimenW100Filled;

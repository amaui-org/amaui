import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInfrared = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Infrared'

      short_name='Infrared'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.9 21.9-1.425-1.425q1.65-1.65 2.587-3.812Q18 14.5 18 12q0-2.5-.938-4.662-.937-2.163-2.587-3.813L15.9 2.1q1.9 1.9 3 4.437Q20 9.075 20 12q0 2.925-1.1 5.462-1.1 2.538-3 4.438Zm-2.825-2.825L11.65 17.65q1.1-1.1 1.725-2.55Q14 13.65 14 12q0-1.65-.625-3.1-.625-1.45-1.725-2.55l1.425-1.425q1.35 1.35 2.138 3.175Q16 9.925 16 12t-.787 3.9q-.788 1.825-2.138 3.175ZM10.25 16.25l-1.425-1.425q.55-.55.863-1.275Q10 12.825 10 12q0-.825-.312-1.55-.313-.725-.863-1.275L10.25 7.75q.8.8 1.275 1.9Q12 10.75 12 12t-.475 2.35q-.475 1.1-1.275 1.9ZM4 20V4h2v6q.825 0 1.412.587Q8 11.175 8 12q0 .825-.588 1.412Q6.825 14 6 14v6Z"/>
    </Icon>
  );
});

IconMaterialInfrared.displayName = 'AmauiIconMaterialInfrared';

export default IconMaterialInfrared;

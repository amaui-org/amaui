import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewTimelineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimelineW100'

      short_name='ViewTimeline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.05 16.35h3.9q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm6-8h3.9q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-3 4h3.9q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25ZM5 19V5 19Z"/>
    </Icon>
  );
});

IconMaterialViewTimelineW100.displayName = 'AmauiIconMaterialViewTimelineW100';

export default IconMaterialViewTimelineW100;

'use client'

import { Hydrate, HydrateProps } from '@tanstack/react-query';

function RQHydrate(props: HydrateProps) {
  return <Hydrate state={props.state}>{props.children}</Hydrate>;
}

export default RQHydrate;
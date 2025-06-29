'use strict'

/**
 *  Custom anchor boilerplate with rel security.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

export default ({url, label}) => <a href={url} rel="nofollow noopener noreferrer" target="_blank">{label}</a>